from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from backend.core.models import User
from backend.core.auth import (
    create_user, authenticate_user,
    create_token, get_current_user
)

router = APIRouter(prefix="/api/auth", tags=["auth"])


class SignupRequest(BaseModel):
    email:    EmailStr
    password: str
    name:     str = ""


class LoginRequest(BaseModel):
    email:    EmailStr
    password: str


class UserResponse(BaseModel):
    id:    int
    email: str
    name:  str


class TokenResponse(BaseModel):
    access_token: str
    token_type:   str = "bearer"
    user:         UserResponse


@router.post("/signup", response_model=TokenResponse)
def signup(data: SignupRequest):
    if len(data.password) < 8:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 8 characters"
        )
    try:
        user = create_user(data.email, data.password, data.name)
    except ValueError as e:
        raise HTTPException(status_code=409, detail=str(e))

    token = create_token(user.id, user.email)
    return TokenResponse(
        access_token = token,
        user = UserResponse(id=user.id, email=user.email, name=user.name or "")
    )


@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    user = authenticate_user(data.email, data.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password"
        )
    token = create_token(user.id, user.email)
    return TokenResponse(
        access_token = token,
        user = UserResponse(id=user.id, email=user.email, name=user.name or "")
    )


@router.get("/me", response_model=UserResponse)
def me(current_user: User = Depends(get_current_user)):
    return UserResponse(
        id    = current_user.id,
        email = current_user.email,
        name  = current_user.name or ""
    )
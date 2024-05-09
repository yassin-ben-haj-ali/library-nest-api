import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/sign-up.dto';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    async signUp(@Body() signUpDto:signUpDto):Promise<{token:string}>{
        return this.authService.signUp(signUpDto);
    }
 
    @Get('/login')
    async login(@Body() loginDto:loginDto):Promise<{token:string}>{
        return this.authService.login(loginDto);
    }

}

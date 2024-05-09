import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret:configService.get("JWT_SECRET"),
          signOptions:{
            expiresIn:configService.get('JWT_EXPIRES')
          }
        }
      },
    }),
    MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

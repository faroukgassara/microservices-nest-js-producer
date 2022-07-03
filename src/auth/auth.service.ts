import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
    constructor(@Inject('sign-in') private readonly client: ClientProxy,private userService : UsersService,private jwtService: JwtService){}

    async validateUser(username:string,password:string):Promise<any>{
        const user = await this.userService.findOne(username);
        if (!user) {
            throw new UnauthorizedException();
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(user && isMatch){
            const {password,email,...rest} = user;
            return user;
        }
        return null ;
    }

    async login(pattern: string,user : any){
        
        const payload = {user}
        this.client.send(pattern, user).toPromise();
        return {
          //access_token: this.jwtService.sign(payload) ,
          user:payload
        };
        
    }
}

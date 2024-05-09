import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category{
    ADVENTURE='Adventure',
    CLASSICS='Classics',
    CRIME='Crime',
    FANTASY='Fantasy',
}


@Schema({
    timestamps:true
})

export class User{
    @Prop()
    name:string;

    @Prop({unique:[true,'Duplicate email entered']})
    email:string;

    @Prop()
    password:string;

}

export const UserSchema=SchemaFactory.createForClass(User)
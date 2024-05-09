import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Get()
    async getAllBooks(@Query() query:ExpressQuery):Promise<Book[]>{
        return this.bookService.findAll(query);
    }

    @Post()
    async createBook(@Body() book:CreateBookDto):Promise<Book>{
        return this.bookService.create(book);
    }
    @Get(':id')
    async findBook(@Param('id') id:string):Promise<Book>{
        return this.bookService.findById(id);
    }
    @Put(':id')
    async updateBook(@Param('id') id:string,book:UpdateBookDto):Promise<Book>{
        return this.bookService.updateById(id,book);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:string):Promise<Book>{
        return this.bookService.deleteById(id);
    }
}

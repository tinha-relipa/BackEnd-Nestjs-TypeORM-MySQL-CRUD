import { registerAs } from "@nestjs/config"

export default registerAs('database', () => {
  return {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME || 'nestjs_crud',
  }
})
import { registerAs } from "@nestjs/config"

export default registerAs('app', () => {
  return {
    port: process.env.PORT || 3000,
    serviceName: process.env.SERVICE_NAME || 'Nestjs-MySQL-CRUD'
  }
})
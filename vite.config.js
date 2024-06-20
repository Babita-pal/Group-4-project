import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// plugins: [
//   new HtmlWebpackPlugin({
//     template: './public/index.html',
//     filename: './index.html',
//     favicon: './public/favicon.ico'
//   })
// ]
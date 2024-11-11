process.loadEnvFile()
import app from './app'
import { PORT } from './constants/env'

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

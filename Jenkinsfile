pipeline{
    agent any
    environment{
        DEPLOY_DIR='/var/www/html/to-do'
    }
    stages{
        stage('checkout'){
            steps{
                checkout scm 
            }
        }
        stage('deploy'){
            steps{
powershell "New-Item -ItemType Directory -Force -Path \"${env.DEPLOY_DIR}\""
        
        // Comando PowerShell para copiar (más simple)
        powershell "Copy-Item -Path * -Include '*.html','*.css','*.js' -Destination \"${env.DEPLOY_DIR}\" -Recurse -Force"
    }
            }
        }
    }
}

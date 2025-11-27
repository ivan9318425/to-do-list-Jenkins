pipeline{
    agent any
    enviroment{
        DEPLOY_DIR='/var/www/html/to-do'
    }
    stages{
        stage('checkout'){
            steps{
                checkout scm 
                'echo Se descarga el archivo'
            }
        }
        stage('deploy'){
            steps{
                sh 'mkdir -p ${env.DEPLOY_DIR}'
                sh 'cp -r ./*.html ./*.css ./*.js ${env.DEPLOY_DIR}'
            }
        }
    }
}

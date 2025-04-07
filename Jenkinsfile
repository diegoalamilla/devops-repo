pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''if docker ps --filter "name=sicei_framework" --format '{{.Names}}' | grep -q "sicei_framework"; then
                    docker stop sicei_framework
                    fi

                    if docker ps -a --filter "name=sicei_framework" --format '{{.Names}}' | grep -q "sicei_framework"; then
                        docker rm sicei_framework
                    fi
    
                    docker build -t sicei_webframework:${BUILD_ID} .
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'docker run -d -p 3000:3000 --name sicei_framework sicei_webframework:${BUILD_ID}'
            }
        }
    }
}

pipeline{
  agent any

  stages{

    stage('Test') {
      steps{
        echo 'Test'
      }
    }

    stage('Build'){
      steps{
        sh 'npm run webpack'
      }
    }

    stage('Deploy'){
      steps{
        sh 'ansible-playbook /var/lib/jenkins/workspace/todolist-front-end/deploy.yml'
      }
    }
  }
}
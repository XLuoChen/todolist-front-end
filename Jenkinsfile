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
        sh '/var/lib/jenkins/workspace/todolist-front-end/scripts/publish.sh'
      }
    }
  }
}
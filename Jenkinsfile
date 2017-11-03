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

    stage('Deploy'){
      steps{
        sh 'ansible-playbook /var/lib/jenkins/workspace/todolist-front-end/deploy-with-docker.yml --extra-vars="ansible_become_pass=remote"'
      }
    }
  }
}
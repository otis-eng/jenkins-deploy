pipeline {
  agents any

  tools {nodejs "node"}

  stages {
    stage("Checkout Soure") {
      steps {
        git "https://github.com/patrick-blip/jenkins-deploy.git"
      }
    }

    stage("Build"){
      steps {
        sh 'npm install'
      }
    }

    stage("Test"){
      steps {
        sh 'node test'
      }
    }
  }
}

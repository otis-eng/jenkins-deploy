pipeline {

  environment {
    dockerimagename  = ""
    dockerImage = ""
  }

  agent any

  stages {
    stage("Checkout Soure"){
      steps {
        git: ""
      }
    }
  }
  stage("Build image"){
    steps{
      script{
        dockerimagename = docker.build dockerimagename
      }
    }
  }
  stage("Pushing Image"){
    environment {
      registryCredential = 'dockerhublogin'
    }
    steps {
      script{
        docker.withRegistry('',registryCredential)
        dockerImage.push("latset")
      }
    }
  }

  stage("Deploy App to Kunbernets"){
    steps {
      script {
        kubernetesDelou(configs: "deloyservice.yml",kubeconfigId:"")
      }
    }
  }
}

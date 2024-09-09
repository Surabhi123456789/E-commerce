

const backendDomain = "http://localhost:8080"
const summaryApi= {
    signUp:{
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    signIn:{
        url: `${backendDomain}/api/signin`,
        method: "post" 
    }
    
}

export default summaryApi
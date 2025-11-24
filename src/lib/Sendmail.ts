import axios from 'axios'

const Sendmail = (data: {
  fullName: string
  email: string
  projectName: string
  projectDescription: string
  teamSize: string
  duration: string
  estimatedCost: string
}) => {
  return axios.post('https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-fd0fc291-c518-426f-935f-e75c1deef8f9/zenith/sendmail?blocking=true&result=true', {
    "fullName": data.fullName,
    "email": data.email,
    "projectName": data.projectName,
    "projectDescription": data.projectDescription,
    "teamSize": data.teamSize,
    "duration": data.duration,
    "estimatedCost": data.estimatedCost
  }, {
    headers: {
      'Authorization': 'Bearer ' + import.meta.env.VITE_TOKEN,
      'Content-Type': 'application/json',
    },
  });
}

export default Sendmail

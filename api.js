import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3003";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // obviously, you'll add a lot here ...

  // Get all companies 
  // Get => {companies: [ { handle, name, description, numEmployees, logoUrl }, ... ] }
  static async getAllCompanies() {
    let res = await this.request(`companies/`);

    return res.companies
  }

  // Get => { user: [ { username, firstName, lastName, isAdmin, jobs }]}
  static async getUser(username) {
    let res = await this.request(`users/${username}`)

    return res
  }

  static async getAllUsers() {
    let res = await this.request(`users/`, apiKey);

    return res.users
  }

  // Jobs API

  static async getAllJobs() {
    let res = await this.request(`jobs/`)

    return res
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`)

    return res
  }

  static async addJob(jobInfo) {
    let res = await this.request(`jobs/`, jobInfo, method='post')

    return res
  }

  static async updateJob(id, newJobInfo) {
    let res = await this.request(`jobs/${id}`, newJobInfo, method='patch')

    return res
  }

  static async deleteJob(id) {
    let res = await this.request(`jobs/${id}`)

    return res
  }

  // authentication API

  static async register(userInfo){
    let res = await this.request( `auth/register`, userInfo, method='post')

    return res.token
  }

  static async login(userInfo){
    let res = await this.request(`auth/token`, userInfo, method='post')

    return res.token
  }
}

export default JoblyApi

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
import axios from "axios";

export class LoanClient {

    static async getBanks() {
        const response = await axios.get<API.bank[]>('/loan/banks')

        return response.data;
    }

    static async getLoans() {
        const response = await axios.get<API.loanTemplates>('/loan/templates')

        return response.data;
    }

    static async getAll() {
        const response = await axios.get<any[]>('/loan');

        return response.data
    }
    static async getEverything() {
        const response = await axios.get<any[]>('/loan/all');

        return response.data
    }

    static async getAllAdmin() {
        const response = await axios.get<any[]>('/loan/admin');

        return response.data
    }

    static async create(payload: any) {
        const response = await axios.post<API.pickup>('/loan/', payload)

        return response.data
    }
    
    static async updateStatus(payload: any) {
        const response = await axios.put('/loan/', payload)

        return response.data
    }

    static async cancel(requestId: number) {

        const response = await axios.delete<API.pickup>(`/request/${requestId}`);

        return response.data;
    }
}
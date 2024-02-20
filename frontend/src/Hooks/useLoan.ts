import { useMutation, useQuery, useQueryClient } from "react-query";
import { LoanClient } from "../Api/loan";

export function useLoan() {

    const queryClient = useQueryClient()

    const loans = useQuery('/loan', LoanClient.getAll)

    const allLoans = useQuery('/loan/all', LoanClient.getEverything)

    const loansAdmin = useQuery('/loan/admin', LoanClient.getAllAdmin)

    const banks = useQuery('banks', LoanClient.getBanks);

    const templates = useQuery('templates', LoanClient.getLoans);

    const addMutation = useMutation((value: any) => LoanClient.create(value), {

        onSuccess: () => {
            queryClient.invalidateQueries('/loan')
            queryClient.invalidateQueries('/loan/admin')
            queryClient.invalidateQueries('/loan/all')
        },

    })
    const statusMutation = useMutation((value: any) => LoanClient.updateStatus(value), {

        onSuccess: () => {
            queryClient.invalidateQueries('/loan')
            queryClient.invalidateQueries('/loan/admin')
            queryClient.invalidateQueries('/loan/all')
        },

    })

    return { banks, templates, addMutation, loans, loansAdmin, statusMutation, allLoans }

}
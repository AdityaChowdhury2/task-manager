import { format } from "date-fns";
const formatDate = (date) => {
    const result = format(new Date(date), 'do MMM, yyyy')
    return result
}
export default formatDate
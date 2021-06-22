export default function generateLink(url) {
    return `${process.env.REACT_APP_BACKEND_BASE_URI}/${url}`
}
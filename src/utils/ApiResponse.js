class ApiResponse{
    constructor(statuscode,data,message ="success"){
        this.statuCode= statusCode
        this.data=data
        this.message=message
        this.success= statusCode < 400
    }
}
export{
    ApiResponse
}
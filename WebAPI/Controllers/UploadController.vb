Imports System.Net
Imports System.Net.Http
Imports System.Web.Http
Imports System.Web.Http.Cors

Namespace Controllers

    <EnableCors("*", "*", "*", SupportsCredentials:=True)>
    Public Class UploadController
        Inherits ApiController

        <HttpPost>
        <Route("api/upload")>
        Public Function PostFormData() As HttpResponseMessage

            Try
                Dim Req As HttpRequest = HttpContext.Current.Request
                Dim f As HttpPostedFile
                Dim FilePath As String
                If (Req.Files.Count > 0) Then
                    For Each FileName As String In Req.Files.Keys
                        f = Req.Files(FileName)
                        FilePath = HttpContext.Current.Server.MapPath("~/App_Data/" & f.FileName)
                        f.SaveAs(FilePath)
                    Next
                End If
                Return Request.CreateResponse(HttpStatusCode.OK)
            Catch ex As Exception
                Return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message)
            End Try
        End Function
    End Class
End Namespace
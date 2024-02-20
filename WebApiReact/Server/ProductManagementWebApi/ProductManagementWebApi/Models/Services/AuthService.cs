using ProductManagementWebApi.Models.Interfaces;

namespace ProductManagementWebApi.Models.Services
{
    public class AuthService : IAuthService
    {
        readonly ITokenService tokenService;
        DataContext _dataContext;
        public AuthService(ITokenService _tokenService, DataContext dataContext)
        {
           this.tokenService = _tokenService;
            _dataContext = dataContext;
        }
        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            if(String.IsNullOrEmpty(request.Username) ||  String.IsNullOrEmpty(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }
            var user = _dataContext.User.FirstOrDefault(x=>x.Username == request.Username && x.Password ==request.Password);
            if (user!=null)
            {
                var generateTokenInformation = await tokenService.GenerateTokenAsync(new GenerateTokenRequest { Username = request.Username });
                response.AccessTokenExpireDate = generateTokenInformation.TokenExpireDate;
                response.AuthenticateResult = true;
                response.AuthToken = generateTokenInformation.Token;
            }

            return response;
        }
    }
}

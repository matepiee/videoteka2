import React from 'react';




export default function Register() {

    return (

        <div className="card p-4 mx-auto" style={{ maxWidth: '450px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className="card-body">
            <h2 className="card-title text-center mb-4">Új fiók regisztrálása</h2>
            
            <form>
                
                {/* Felhasználónév mező */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Felhasználónév</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        name="username"
                        placeholder="Pl: SimaUser99" 
                        required 
                    />
                </div>
                
                {/* E-mail cím mező */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail cím</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="pelda@domain.hu" 
                        required 
                    />
                </div>
                
                {/* Jelszó mező */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Jelszó</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        required 
                    />
                </div>
                
                {/* Jelszó megerősítése mező */}
                <div className="mb-4">
                    <label htmlFor="passwordRepeat" className="form-label">Jelszó újra</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="passwordRepeat" 
                        name="passwordRepeat" 
                        required 
                    />
                </div>
                
                {/* Regisztráció gomb */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Regisztráció
                    </button>
                </div>
                
            </form>
            
        </div>
        
        <div className="card-footer text-center text-muted mt-3">
            Már van fiókod? <a href="#" className="text-decoration-none">Jelentkezz be!</a>
        </div>
    </div>

    );
}

import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/43472806?s=460&v=4" alt="Nayara"/>
                            <div className="user-info">
                                <strong>Nayara Corrêa</strong>
                                <span>ReactJS, React Native, Node.JS</span>
                            </div>
                        </header>
                        <p>Estudante de Análise de Sistemas e desenvolvera de sistemas em uma StartUp voltada para a área da saúde.</p>
                        <a href="https://github.com/naycorrea">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/43472806?s=460&v=4" alt="Nayara"/>
                            <div className="user-info">
                                <strong>Nayara Corrêa</strong>
                                <span>ReactJS, React Native, Node.JS</span>
                            </div>
                        </header>
                        <p>Estudante de Análise de Sistemas e desenvolvera de sistemas em uma StartUp voltada para a área da saúde.</p>
                        <a href="https://github.com/naycorrea">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/43472806?s=460&v=4" alt="Nayara"/>
                            <div className="user-info">
                                <strong>Nayara Corrêa</strong>
                                <span>ReactJS, React Native, Node.JS</span>
                            </div>
                        </header>
                        <p>Estudante de Análise de Sistemas e desenvolvera de sistemas em uma StartUp voltada para a área da saúde.</p>
                        <a href="https://github.com/naycorrea">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/43472806?s=460&v=4" alt="Nayara"/>
                            <div className="user-info">
                                <strong>Nayara Corrêa</strong>
                                <span>ReactJS, React Native, Node.JS</span>
                            </div>
                        </header>
                        <p>Estudante de Análise de Sistemas e desenvolvera de sistemas em uma StartUp voltada para a área da saúde.</p>
                        <a href="https://github.com/naycorrea">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default App;

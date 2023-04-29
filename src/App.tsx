import React, { useState } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_PATH

const App: React.FC = () => {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [covers, setCovers] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            setLoading(true)
            const response = await axios.get(`${BASE_URL}?artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}`)
            setCovers(response.data)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <section className="section has-background-success-dark">
                <div className="columns is-centered">
                    <div className="column">
                            
                    </div>
                    <div className="column is-half has-text-centered">
                        <h1 className="title is-1 has-text-white">Album Cover Search</h1>
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </section>
            <div className="container is-max-desktop">
                <div className="box">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label">Artist</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={artist}
                                        onChange={event => setArtist(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Album</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={album}
                                        onChange={event => setAlbum(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary" type="submit">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                {
                    loading ? (
                        <div className="box">
                            Loading...
                        </div>
                    ) : (
                        <div className="columns is-multiline">
                            {
                                covers.map(
                                    (cover, index) => (
                                        <div className="column is-3" key={index}>
                                            <div className="box">
                                                <img src={cover} alt="Album Cover"/>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default App
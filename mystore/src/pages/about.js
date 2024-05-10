const About = () => {
    return (
        <>
            <style>
                {`
                    .aboutContainer {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 20px;
                    }
                    .aboutImage {
                        width: 500px;
                        height: 850px;
                    }
                    @media (max-width: 768px) {
                        .aboutContainer {
                            flex-direction: column;
                        }
                        .aboutImage {
                            width: 100%;
                            height: auto;
                        }
                    }
                `}
            </style>
            <div className="aboutContainer">
                <div style={{ flex: 1 }}>
                    <img src="/images/aboutme.jpg" alt="About Me" className="aboutImage" />
                </div>
                <div style={{ flex: 2 }}>
                    <h1>About Us</h1>
                    <p>  Welcome to KoolKomiks, your ultimate destination for all things comics! We're not just a store; we're a haven for comic book enthusiasts and collectors alike. Our mission is to bring you the coolest, most diverse collection of comic books, graphic novels, and merchandise from every corner of the universe.

                        Founded in 2024, KoolKomiks sprang from a passion for storytelling and the artistic expression found within the pages of comic books. We cater to fans of all genres, from the darkest noir detective stories to the most uplifting superhero adventures. Our selection spans the golden age of comics to the latest releases, ensuring there's something exciting on our shelves for everyone.

                        At KoolKomiks, we believe that comics are a unique form of art that brings people together, sparking imagination and conversation. Our staff are not only experts in comics; they're fans first and foremost. They're always ready to help you find your next favorite read or start your first collection.

                        Beyond our extensive collection, KoolKomiks is a community hub. We host regular events, signings, and workshops, making our store a vibrant part of the local culture. Whether you're looking to meet fellow comic lovers, find rare editions, or just escape into the fantastic world of your favorite characters, KoolKomiks is here for you.

                        Thank you for choosing KoolKomiks. Dive into our world and let the adventures begin!</p>
                   
                </div>
            </div>
        </>
    );
};

export default About;
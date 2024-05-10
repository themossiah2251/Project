const Contact = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ minWidth: '300px' }}>
                    <img src=" /images/contactus.jpg" alt="Contact Us" style={{ width: '400px', height: '700px' }}></img></div>
                <div style={{ flex: 1 }}>
                    <h1>Contact Me</h1>
                    <p><a href="tel:+12268882251" style={{ textDecoration: 'none', color: 'inherit' }}>Phone: 226-888-2251</a></p>
                    <p><a href="mailto:mossiah.thompsonsharpe@triosstudent.com" style={{ textDecoration: 'none', color: 'inherit' }}>Email: mossiah.thompsonsharpe@triosstudent.com</a></p>

                    <br />
                    <br />
                    <div style={{ maxWidth: '600px' }}>
                        <h1>Message Me</h1>
                        <form action="submit.php" method="post">
                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                                <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                                <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                                <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
                            </div>

                            <input type="submit" value="Submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
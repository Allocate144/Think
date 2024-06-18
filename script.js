/* styles.css */

body, html {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    background: #f0f0f0;
}

.login-container {
    perspective: 1000px;
}

.login-box {
    width: 300px;
    padding: 40px;
    background: #fff;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform-style: preserve-3d;
}

.login-box h2 {
    margin: 0 0 20px;
    padding: 0;
    color: #333;
    text-align: center;
}

.input-box {
    position: relative;
    margin-bottom: 30px;
}

.input-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #333;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #333;
    outline: none;
    background: transparent;
}

.input-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #333;
    pointer-events: none;
    transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #333;
    font-size: 12px;
}

button {
    width: 100%;
    background: #555;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    transition: 0.3s;
    border-radius: 10px;
}

button:hover {
    background: #00ff00;
}

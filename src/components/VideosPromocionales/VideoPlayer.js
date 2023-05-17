import React, { useEffect, useRef, useState } from "react";
import VideoReno7 from "../../Videos/OppoReno7.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    // Al montar el componente, iniciamos la reproducción del video
    videoRef.current.play();

    // Hacer que el video se reproduzca cada 10 minutos
    const intervalId = setInterval(() => {
      videoRef.current.currentTime = 0;
      document.getElementById("video-player").style.display = "block";
      videoRef.current.play();
    }, 10 * 60 * 1000); // 10 minutos en milisegundos

    // Al desmontar el componente, limpiamos el intervalo
    return () => clearInterval(intervalId);
  }, []);

  const handleTimeUpdate = () => {
    // Cuando cambia la posición del video, actualizamos el contador de tiempo restante
    const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
    const formattedTimeLeft = formatTime(timeLeft);
    setTimeRemaining(formattedTimeLeft);
  };

  const handleEnded = () => {
    // Cuando el video termine de reproducirse, ocultamos el componente
    document.getElementById("video-player").style.display = "none";
  };

  //const maxHeight = window.innerWidth >= 768 ? "95vh" : "90vh"; // Para pantallas mayores a 768px, altura máxima de 50vh, para pantallas menores, altura máxima de 75vh
  
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor(time - hours * 3600 - minutes * 60);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div
      id="video-player"
      style={{
        position: "fixed",
        bottom: "0",
        right: "10px",
        zIndex: "999",
        height: "50%",
      }}
    >
      <div style={{ position: "absolute", top: "0", right: "0", padding: "8px", color: "#fff", backgroundColor: "#000", opacity: "0.7", fontSize: "14px" }}>
        {timeRemaining}
      </div>
      <video
        ref={videoRef}
        src={VideoReno7}
        muted
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{
          height: "100%",
          width: "auto",
        }}
      />
    </div>
  );
};

export default VideoPlayer;

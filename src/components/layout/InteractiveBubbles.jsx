/**
 * StockFlow Systems - Premium Corporate Inventory Sourcing Portal
 * Author: MrAbhi2k3 (https://github.com/MrAbhi2k3)
 * Tagline: Elevating institutional logistics with micro-precise inventory controls.
 * Description: Interactive floating background bubble canvas reacting dynamically to cursor movement.
 */

import React, { useEffect, useRef } from "react";

export default function InteractiveBubbles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const labels = [
      "SKU",
      "RFID",
      "QTY",
      "BOX",
      "API",
      "GPS",
      "FLOW",
      "SAFE",
    ];

    const particles = [];

    const particleCount = 12;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.size = Math.random() * 18 + 10;

        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;

        this.label =
          labels[Math.floor(Math.random() * labels.length)];

        this.gradientColor =
          Math.random() > 0.5
            ? ["rgba(59,130,246,0.14)", "rgba(59,130,246,0.03)"]
            : ["rgba(249,115,22,0.12)", "rgba(249,115,22,0.03)"];

        this.borderColor =
          Math.random() > 0.5
            ? "rgba(59,130,246,0.18)"
            : "rgba(249,115,22,0.16)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;

        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force =
              (mouse.radius - distance) / mouse.radius;

            const angle = Math.atan2(dy, dx);

            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          2,
          this.x,
          this.y,
          this.size
        );

        gradient.addColorStop(0, this.gradientColor[0]);
        gradient.addColorStop(1, this.gradientColor[1]);

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.lineWidth = 1;

        ctx.strokeStyle = this.borderColor;

        ctx.stroke();

        ctx.beginPath();

        ctx.arc(
          this.x - this.size / 4,
          this.y - this.size / 4,
          this.size / 6,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.fill();

        ctx.fillStyle = "rgba(71,85,105,0.35)";

        ctx.font = "600 7px Inter, sans-serif";

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(this.label, this.x, this.y);
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-[#F8FAFC]"
    />
  );
}
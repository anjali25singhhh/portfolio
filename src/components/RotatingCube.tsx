
import { useEffect, useRef } from 'react';

const RotatingCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;
    
    // Cube properties
    const cubeSize = 40;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // 3D cube vertices (x, y, z)
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1]
    ];
    
    // Edges connecting vertices
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];
    
    // Animation variables
    let angleX = 0;
    let angleY = 0;
    let angleZ = 0;
    
    // Project 3D point to 2D
    const project = (point3D: number[]) => {
      const [x, y, z] = point3D;
      return [
        centerX + x * cubeSize,
        centerY + y * cubeSize
      ];
    };
    
    // Rotate point around axes
    const rotate = (point: number[]) => {
      let [x, y, z] = point;
      
      // Rotate around X axis
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      
      // Rotate around Y axis
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      
      // Rotate around Z axis
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;
      
      return [x3, y3, z2];
    };
    
    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Rotate cube
      angleX += 0.005;
      angleY += 0.007;
      angleZ += 0.003;
      
      // Calculate rotated vertices
      const rotatedVertices = vertices.map(rotate);
      
      // Draw edges
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      
      edges.forEach(([i, j]) => {
        const [x1, y1] = project(rotatedVertices[i]);
        const [x2, y2] = project(rotatedVertices[j]);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
      
      // Draw vertices
      ctx.fillStyle = '#d946ef';
      rotatedVertices.forEach(point => {
        const [x, y] = project(point);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="mx-auto my-6 opacity-70"
      width={200}
      height={200}
    />
  );
};

export default RotatingCube;

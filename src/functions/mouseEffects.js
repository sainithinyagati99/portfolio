export const handleMouseMove = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  const rotateX = deltaY * 10;
  const rotateY = deltaX * -10;

  target.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

export const handleMouseLeave = (event) => {
  const target = event.currentTarget;
  target.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
}

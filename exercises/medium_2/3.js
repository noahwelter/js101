let triangle = (...angles) => {
  const VALID_TOTAL_ANGLE = 180;
  angles.sort((a, b) => a - b);

  if (angles.reduce((sum, angle) => sum + angle) !== VALID_TOTAL_ANGLE ||
    angles.some(angle => angle <= 0)) {
    return 'invalid';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
};

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
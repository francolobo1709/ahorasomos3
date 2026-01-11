import React, { useState } from 'react';

/**
 * Componente de calificación con estrellas
 * @param {Object} props
 * @param {number} props.rating - Rating actual (0-5)
 * @param {boolean} props.readonly - Si es solo lectura
 * @param {Function} props.onChange - Callback cuando cambia la calificación
 * @param {string} props.size - Tamaño: 'sm', 'md', 'lg'
 */
const StarRating = ({ rating = 0, readonly = true, onChange, size = 'md' }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const handleClick = (value) => {
    if (!readonly && onChange) {
      onChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    if (!readonly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          disabled={readonly}
          className={`
            ${sizeClasses[size]}
            ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
            ${star <= displayRating ? 'text-yellow-400' : 'text-gray-300'}
            transition-all duration-150
          `}
        >
          {star <= displayRating ? '★' : '☆'}
        </button>
      ))}
      {readonly && (
        <span className="ml-2 text-sm text-gray-600 font-semibold">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;

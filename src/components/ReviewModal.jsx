import React, { useState } from 'react';
import StarRating from './StarRating';

/**
 * Componente de modal para dejar una reseña
 * @param {Object} props
 * @param {Object} props.worker - Datos del trabajador
 * @param {Function} props.onClose - Callback para cerrar el modal
 * @param {Function} props.onSubmit - Callback al enviar la reseña
 */
const ReviewModal = ({ worker, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Por favor selecciona una calificación');
      return;
    }

    setSubmitting(true);

    try {
      await onSubmit({
        workerId: worker.id,
        rating,
        comment,
        createdAt: new Date()
      });
      onClose();
    } catch (error) {
      console.error('Error al enviar reseña:', error);
      alert('Error al enviar la reseña. Por favor intenta de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Califica a {worker.displayName}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Tu opinión ayuda a otros usuarios
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Calificación */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Calificación *
            </label>
            <div className="flex justify-center py-2">
              <StarRating
                rating={rating}
                readonly={false}
                onChange={setRating}
                size="lg"
              />
            </div>
          </div>

          {/* Comentario */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Comentario (opcional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Cuéntanos tu experiencia..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={submitting || rating === 0}
              className={`
                flex-1 px-4 py-2 rounded-lg font-semibold transition-colors
                ${submitting || rating === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              `}
            >
              {submitting ? 'Enviando...' : 'Enviar Reseña'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;

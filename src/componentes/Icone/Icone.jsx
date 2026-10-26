const desenhos = {
  fechar: 'm6 6 12 12M6 18 18 6',
  confirmar: 'm5 12 4 4L19 6',
  mais: 'M12 5v14M5 12h14',
};

export default function Icone({ nome, tamanho = 20, ...propriedades }) {
  const desenho = desenhos[nome];

  if (!desenho) return null;

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...propriedades}
    >
      <path d={desenho} />
    </svg>
  );
}

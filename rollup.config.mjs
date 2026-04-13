import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/card.ts',
  output: {
    file: 'dist/school-timetable-card.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser({
      format: { comments: false },
      compress: { passes: 2 },
    }),
  ],
};

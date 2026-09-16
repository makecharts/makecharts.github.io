import React, { useState, useEffect, useRef } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { toPng } from 'html-to-image';
import {
  PieChart as PieIcon,
  BarChart2,
  Plus,
  Trash2,
  Download,
  FileSpreadsheet,
  Sparkles,
  Sliders,
  X,
  Check,
  CircleDot,
  AlignLeft,
} from 'lucide-react';
import { ui, defaultLang } from '../i18n/ui';

const COLOR_PALETTE = [
  '#FF9D50', // Vibrant Orange
  '#1DCED8', // Aqua Teal
  '#55E07E', // Emerald Mint
  '#FFB877', // Soft Coral Peach
  '#16B7C0', // Deep Teal
  '#42CB6C', // Vivid Green
  '#F59E0B', // Golden Amber
  '#8B5CF6', // Soft Violet
  '#EC4899', // Pink
  '#FFF9D8', // Lemon Cream
];

const PRESETS = {
  browsers: {
    title: 'Global Browser Market Share',
    data: [
      { id: '1', label: 'Google Chrome', value: 65, color: '#FF9D50' },
      { id: '2', label: 'Apple Safari', value: 19, color: '#1DCED8' },
      { id: '3', label: 'Microsoft Edge', value: 6, color: '#55E07E' },
      { id: '4', label: 'Mozilla Firefox', value: 4, color: '#FFB877' },
      { id: '5', label: 'Opera & Others', value: 6, color: '#16B7C0' },
    ],
  },
  budget: {
    title: 'Monthly Project Budget ($k)',
    data: [
      { id: '1', label: 'Engineering', value: 48, color: '#FF9D50' },
      { id: '2', label: 'Marketing & SEO', value: 24, color: '#1DCED8' },
      { id: '3', label: 'Design & UX', value: 16, color: '#55E07E' },
      { id: '4', label: 'Operations & Infra', value: 12, color: '#FFB877' },
    ],
  },
};

export default function ChartWorkspace({ lang = 'en' }) {
  void React;
  const t = (key) => {
    const dict = ui[lang] || ui[defaultLang];
    return dict[key] || ui[defaultLang][key] || key;
  };

  const [mounted, setMounted] = useState(false);
  const [chartType, setChartType] = useState('pie'); // 'pie' | 'donut' | 'bar' | 'horizontal_bar'
  const [chartTitle, setChartTitle] = useState('Global Browser Market Share');
  const [rows, setRows] = useState(PRESETS.browsers.data);
  const [showLegend, setShowLegend] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showWatermark, setShowWatermark] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState('');

  // CSV Modal State
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [csvText, setCsvText] = useState('');
  const [csvError, setCsvError] = useState('');

  const chartContainerRef = useRef(null);

  // Detect dark mode & changes
  useEffect(() => {
    setMounted(true);
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleThemeChange = () => checkDark();
    window.addEventListener('theme-change', handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('theme-change', handleThemeChange);
    };
  }, []);

  // Total sum of values
  const totalValue = rows.reduce((acc, row) => acc + (Number(row.value) || 0), 0);

  // Row operations
  const handleAddRow = () => {
    const nextColorIndex = rows.length % COLOR_PALETTE.length;
    const newRow = {
      id: String(Date.now()),
      label: `Item ${rows.length + 1}`,
      value: 10,
      color: COLOR_PALETTE[nextColorIndex],
    };
    setRows([...rows, newRow]);
  };

  const handleUpdateRow = (id, field, val) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.id === id) {
          if (field === 'value') {
            const num = val === '' ? '' : Math.max(0, Number(val));
            return { ...row, [field]: num };
          }
          return { ...row, [field]: val };
        }
        return row;
      })
    );
  };

  const handleDeleteRow = (id) => {
    if (rows.length <= 1) {
      setRows([]);
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleClearAll = () => {
    setRows([]);
  };

  const handleLoadPreset = (presetKey) => {
    const p = PRESETS[presetKey];
    if (p) {
      setChartTitle(p.title);
      setRows(p.data);
    }
  };

  // CSV Import Parsing
  const handleImportCsv = () => {
    setCsvError('');
    if (!csvText.trim()) {
      setCsvError(t('workspace.csvModalError'));
      return;
    }

    const lines = csvText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const parsedRows = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Delimiter detection: comma, tab, semicolon
      let parts = [];
      if (line.includes('\t')) {
        parts = line.split('\t');
      } else if (line.includes(';')) {
        parts = line.split(';');
      } else {
        parts = line.split(',');
      }

      if (parts.length >= 2) {
        const rawLabel = parts[0].trim().replace(/^["']|["']$/g, '');
        const cleanValStr = parts[1]
          .trim()
          .replace(/[$€£¥%,\s]/g, '')
          .replace(/^["']|["']$/g, '');
        const numVal = parseFloat(cleanValStr);

        // Skip header if line 0 has NaN
        if (i === 0 && isNaN(numVal)) {
          continue;
        }

        if (rawLabel && !isNaN(numVal)) {
          parsedRows.push({
            id: `csv-${Date.now()}-${i}`,
            label: rawLabel,
            value: numVal,
            color: COLOR_PALETTE[parsedRows.length % COLOR_PALETTE.length],
          });
        }
      }
    }

    if (parsedRows.length === 0) {
      setCsvError(t('workspace.csvModalError'));
      return;
    }

    setRows(parsedRows);
    setIsCsvModalOpen(false);
    setCsvText('');
  };

  // Export as Vector SVG via XMLSerializer
  const handleExportSvg = () => {
    if (!chartContainerRef.current) return;
    setIsExporting(true);

    try {
      const svgElement = chartContainerRef.current.querySelector('svg.recharts-surface');
      if (!svgElement) {
        throw new Error('SVG node not found');
      }

      const clone = svgElement.cloneNode(true);
      const rect = svgElement.getBoundingClientRect();
      const width = rect.width || 800;
      const height = rect.height || 450;

      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      clone.setAttribute('width', String(width));
      clone.setAttribute('height', String(height));
      clone.setAttribute('viewBox', `0 0 ${width} ${height}`);

      // Solid background rect for standalone viewer compatibility
      const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bgRect.setAttribute('width', '100%');
      bgRect.setAttribute('height', '100%');
      bgRect.setAttribute('fill', isDarkMode ? '#020617' : '#ffffff');
      clone.insertBefore(bgRect, clone.firstChild);

      // If title is set, inject a header text element at top
      if (chartTitle.trim()) {
        const titleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        titleText.setAttribute('x', '24');
        titleText.setAttribute('y', '32');
        titleText.setAttribute('fill', isDarkMode ? '#f8fafc' : '#0f172a');
        titleText.setAttribute('font-size', '16');
        titleText.setAttribute('font-weight', 'bold');
        titleText.setAttribute('font-family', 'sans-serif');
        titleText.textContent = chartTitle;
        clone.appendChild(titleText);
      }

      // If watermark is enabled, inject watermark stamp in exported SVG
      if (showWatermark) {
        const wmText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        wmText.setAttribute('x', String(width - 145));
        wmText.setAttribute('y', '32');
        wmText.setAttribute('fill', isDarkMode ? '#64748b' : '#94a3b8');
        wmText.setAttribute('font-size', '11');
        wmText.setAttribute('font-weight', '500');
        wmText.setAttribute('font-family', 'sans-serif');
        wmText.textContent = 'makecharts.github.io';
        clone.appendChild(wmText);
      }

      const serializer = new XMLSerializer();
      const svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + serializer.serializeToString(clone);
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.download = `${(chartTitle || 'chart').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.svg`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setExportSuccess(t('workspace.downloadStarted'));
      setTimeout(() => setExportSuccess(''), 3500);
    } catch (err) {
      console.error('SVG Export Failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Export as High-Res PNG via html-to-image
  const handleExportPng = async () => {
    if (!chartContainerRef.current) return;
    setIsExporting(true);

    try {
      const dataUrl = await toPng(chartContainerRef.current, {
        pixelRatio: 2.5,
        backgroundColor: isDarkMode ? '#020617' : '#ffffff',
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = `${(chartTitle || 'chart').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExportSuccess(t('workspace.downloadStarted'));
      setTimeout(() => setExportSuccess(''), 3500);
    } catch (err) {
      console.error('PNG Export Failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  // Formatting tooltip & labels
  const formattedData = rows.map((r) => ({
    ...r,
    value: Number(r.value) || 0,
  }));

  const axisColor = isDarkMode ? '#94a3b8' : '#64748b';
  const gridColor = isDarkMode ? '#1e293b' : '#f1f5f9';

  return (
    <div className="w-full">
      {/* Export status toast notification */}
      {exportSuccess && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-xl text-sm font-medium animate-bounce">
          <Check className="w-4 h-4" />
          <span>{exportSuccess}</span>
        </div>
      )}

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Data Editor & Controls (5 Cols)             */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Chart Settings Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t('workspace.chartTypeTitle')}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Sliders className="w-3.5 h-3.5" />
                <span>{t('workspace.title')}</span>
              </div>
            </div>

            {/* Chart Type Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              <button
                type="button"
                onClick={() => setChartType('pie')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  chartType === 'pie'
                    ? 'bg-theme-orange border-theme-orange text-slate-950 font-bold shadow-md shadow-theme-orange/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <PieIcon className="w-4 h-4" />
                <span>{t('workspace.typePie')}</span>
              </button>

              <button
                type="button"
                onClick={() => setChartType('donut')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  chartType === 'donut'
                    ? 'bg-theme-orange border-theme-orange text-slate-950 font-bold shadow-md shadow-theme-orange/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <CircleDot className="w-4 h-4" />
                <span>{t('workspace.typeDonut')}</span>
              </button>

              <button
                type="button"
                onClick={() => setChartType('bar')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  chartType === 'bar'
                    ? 'bg-theme-orange border-theme-orange text-slate-950 font-bold shadow-md shadow-theme-orange/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <BarChart2 className="w-4 h-4" />
                <span>{t('workspace.typeBar')}</span>
              </button>

              <button
                type="button"
                onClick={() => setChartType('horizontal_bar')}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  chartType === 'horizontal_bar'
                    ? 'bg-theme-orange border-theme-orange text-slate-950 font-bold shadow-md shadow-theme-orange/20'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <AlignLeft className="w-4 h-4" />
                <span>{t('workspace.typeHorizontalBar')}</span>
              </button>
            </div>

            {/* Chart Title Input */}
            <div className="space-y-1.5">
              <label htmlFor="chart-title-input" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                {t('workspace.chartTitleLabel')}
              </label>
              <input
                id="chart-title-input"
                type="text"
                value={chartTitle}
                onChange={(e) => setChartTitle(e.target.value)}
                placeholder={t('workspace.chartTitlePlaceholder')}
                aria-label={t('workspace.chartTitleLabel')}
                className="w-full px-3.5 py-2 rounded-xl text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-orange transition-colors"
              />
            </div>

            {/* Toggles: Legend, Grid, Watermark */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 select-none">
                <input
                  type="checkbox"
                  checked={showLegend}
                  onChange={(e) => setShowLegend(e.target.checked)}
                  className="rounded border-slate-300 text-theme-orange focus:ring-theme-orange w-4 h-4"
                />
                <span>{t('workspace.showLegend')}</span>
              </label>

              {(chartType === 'bar' || chartType === 'horizontal_bar') && (
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 select-none">
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                    className="rounded border-slate-300 text-theme-orange focus:ring-theme-orange w-4 h-4"
                  />
                  <span>{t('workspace.showGrid')}</span>
                </label>
              )}

              <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400 select-none">
                <input
                  type="checkbox"
                  checked={showWatermark}
                  onChange={(e) => setShowWatermark(e.target.checked)}
                  className="rounded border-slate-300 text-theme-orange focus:ring-theme-orange w-4 h-4"
                />
                <span>{t('workspace.showWatermark')}</span>
              </label>
            </div>
          </div>

          {/* Data Table Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {t('workspace.dataEditorTitle')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {rows.length} {t('workspace.rowsCount')} · {t('workspace.total')}: {totalValue.toLocaleString()}
                </p>
              </div>

              {/* Presets & CSV buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCsvModalOpen(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                  title={t('workspace.pasteCsv')}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-theme-teal" />
                  <span>{t('workspace.pasteCsv')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleLoadPreset(rows.length > 4 ? 'budget' : 'browsers')}
                  className="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title={t('workspace.loadSample')}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">{t('workspace.loadSample')}</span>
                </button>
              </div>
            </div>

            {/* Editable Data Rows Table */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {rows.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                  {t('workspace.emptyStateDesc')}
                </div>
              ) : (
                rows.map((row) => (
                  <div
                    key={row.id}
                    className="flex items-center gap-2 p-1.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/60 dark:border-slate-800/60 transition-colors"
                  >
                    {/* Color Input */}
                    <div className="relative w-7 h-7 shrink-0 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs cursor-pointer">
                      <input
                        type="color"
                        value={row.color}
                        onChange={(e) => handleUpdateRow(row.id, 'color', e.target.value)}
                        className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0"
                        title={t('workspace.colColor')}
                        aria-label={`${t('workspace.colColor')}: ${row.label || 'row'}`}
                      />
                    </div>

                    {/* Label Input */}
                    <input
                      type="text"
                      value={row.label}
                      onChange={(e) => handleUpdateRow(row.id, 'label', e.target.value)}
                      placeholder={t('workspace.colLabel')}
                      aria-label={`${t('workspace.colLabel')} ${row.label || ''}`}
                      className="flex-grow min-w-0 px-2.5 py-1 text-xs rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 focus:border-theme-orange bg-transparent focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none transition-colors"
                    />

                    {/* Numeric Value Input */}
                    <input
                      type="number"
                      value={row.value}
                      onChange={(e) => handleUpdateRow(row.id, 'value', e.target.value)}
                      placeholder="0"
                      aria-label={`${t('workspace.colValue')} for ${row.label || 'row'}`}
                      className="w-20 px-2 py-1 text-xs font-mono text-right rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 focus:border-theme-orange bg-transparent focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:outline-none transition-colors"
                    />

                    {/* Delete Row Button */}
                    <button
                      type="button"
                      onClick={() => handleDeleteRow(row.id)}
                      className="w-7 h-7 shrink-0 flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title={t('workspace.deleteRow')}
                      aria-label={`${t('workspace.deleteRow')}: ${row.label || 'row'}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Row Actions: Add Row & Clear */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={handleAddRow}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950/50 text-theme-orange dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('workspace.addRow')}</span>
              </button>

              {rows.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {t('workspace.clearAll')}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Live Chart Preview & Exports (7 Cols)       */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div
            ref={chartContainerRef}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col relative transition-colors"
          >
            {/* Chart Title Header in Preview */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {chartTitle || t('workspace.previewTitle')}
                </h3>
                <span className="text-xs text-slate-400">
                  {chartType.toUpperCase().replace('_', ' ')} · {rows.length} {t('workspace.rowsCount')}
                </span>
              </div>

              {/* Watermark / Logo stamp */}
              {showWatermark && (
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-theme-orange"></div>
                  <span>makecharts.github.io</span>
                  <button
                    type="button"
                    onClick={() => setShowWatermark(false)}
                    className="ml-1 text-slate-400 hover:text-rose-500 transition-colors"
                    title="Remove watermark"
                    aria-label="Remove watermark"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Recharts Live Canvas */}
            <div className="w-full h-[400px] flex items-center justify-center">
              {!mounted ? (
                <div className="flex items-center justify-center text-slate-400 text-sm">
                  Loading Chart Engine...
                </div>
              ) : rows.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center p-8 text-slate-400">
                  <PieIcon className="w-12 h-12 stroke-[1.2] mb-3 text-slate-300 dark:text-slate-700" />
                  <p className="text-sm font-medium">{t('workspace.emptyStateTitle')}</p>
                  <p className="text-xs mt-1 text-slate-500">{t('workspace.emptyStateDesc')}</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  {/* Pie / Donut Chart */}
                  {chartType === 'pie' || chartType === 'donut' ? (
                    <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
                          borderColor: isDarkMode ? '#1e293b' : '#e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                          fontSize: '12px',
                          color: isDarkMode ? '#f8fafc' : '#0f172a',
                        }}
                        itemStyle={{ color: isDarkMode ? '#f8fafc' : '#0f172a' }}
                      />
                      {showLegend && <Legend verticalAlign="bottom" height={36} />}
                      <Pie
                        data={formattedData}
                        dataKey="value"
                        nameKey="label"
                        cx="50%"
                        cy="50%"
                        innerRadius={chartType === 'donut' ? 65 : 0}
                        outerRadius={115}
                        paddingAngle={chartType === 'donut' ? 3 : 1}
                        label={({ name, percent }) =>
                          percent > 0.05 ? `${name} ${(percent * 100).toFixed(0)}%` : ''
                        }
                        labelLine={false}
                        animationDuration={600}
                      >
                        {formattedData.map((entry) => (
                          <Cell key={`cell-${entry.id}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                    </PieChart>
                  ) : chartType === 'bar' ? (
                    /* Vertical Bar Chart */
                    <BarChart
                      data={formattedData}
                      margin={{ top: 20, right: 20, left: 0, bottom: 25 }}
                    >
                      {showGrid && (
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                      )}
                      <XAxis
                        dataKey="label"
                        tick={{ fill: axisColor, fontSize: 11 }}
                        tickLine={{ stroke: axisColor }}
                        axisLine={{ stroke: axisColor }}
                      />
                      <YAxis
                        tick={{ fill: axisColor, fontSize: 11 }}
                        tickLine={{ stroke: axisColor }}
                        axisLine={{ stroke: axisColor }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
                          borderColor: isDarkMode ? '#1e293b' : '#e2e8f0',
                          borderRadius: '12px',
                          fontSize: '12px',
                          color: isDarkMode ? '#f8fafc' : '#0f172a',
                        }}
                      />
                      {showLegend && <Legend verticalAlign="top" height={36} />}
                      <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={600}>
                        {formattedData.map((entry) => (
                          <Cell key={`bar-cell-${entry.id}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  ) : (
                    /* Horizontal Bar Chart */
                    <BarChart
                      layout="vertical"
                      data={formattedData}
                      margin={{ top: 20, right: 25, left: 30, bottom: 20 }}
                    >
                      {showGrid && (
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={false} />
                      )}
                      <XAxis
                        type="number"
                        tick={{ fill: axisColor, fontSize: 11 }}
                        tickLine={{ stroke: axisColor }}
                        axisLine={{ stroke: axisColor }}
                      />
                      <YAxis
                        type="category"
                        dataKey="label"
                        width={90}
                        tick={{ fill: axisColor, fontSize: 11 }}
                        tickLine={{ stroke: axisColor }}
                        axisLine={{ stroke: axisColor }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
                          borderColor: isDarkMode ? '#1e293b' : '#e2e8f0',
                          borderRadius: '12px',
                          fontSize: '12px',
                          color: isDarkMode ? '#f8fafc' : '#0f172a',
                        }}
                      />
                      {showLegend && <Legend verticalAlign="top" height={36} />}
                      <Bar dataKey="value" radius={[0, 6, 6, 0]} animationDuration={600}>
                        {formattedData.map((entry) => (
                          <Cell key={`hbar-cell-${entry.id}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Export Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                100% Client-Side Export:
              </span>{' '}
              Zero compression loss · Ready for print & presentations
            </div>

            <div className="flex items-center gap-2.5">
              {/* SVG Download Button */}
              <button
                type="button"
                onClick={handleExportSvg}
                disabled={isExporting || rows.length === 0}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-theme-orange disabled:opacity-40"
              >
                <Download className="w-4 h-4 text-theme-orange dark:text-blue-400" />
                <span>{isExporting ? t('workspace.exporting') : t('workspace.exportSvg')}</span>
              </button>

              {/* PNG Download Button */}
              <button
                type="button"
                onClick={handleExportPng}
                disabled={isExporting || rows.length === 0}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-theme-orange hover:bg-theme-orange-hover text-slate-950 shadow-md shadow-theme-orange/25 transition-all focus:outline-none focus:ring-2 focus:ring-theme-orange disabled:opacity-40"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? t('workspace.exporting') : t('workspace.exportPng')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSV / TSV Paste Modal */}
      {isCsvModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="csv-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-3">
              <h3 id="csv-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-theme-orange dark:text-blue-400" />
                <span>{t('workspace.csvModalTitle')}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCsvModalOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                title="Close dialog"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              {t('workspace.csvModalDesc')}
            </p>

            <textarea
              rows={6}
              value={csvText}
              onChange={(e) => setCsvText(e.target.value)}
              placeholder={t('workspace.csvModalPlaceholder')}
              aria-label={t('workspace.csvModalTitle')}
              className="w-full font-mono text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-orange mb-2"
            />

            {csvError && (
              <p className="text-xs text-rose-500 font-medium mb-3">
                {csvError}
              </p>
            )}

            <div className="flex items-center justify-end gap-2.5 mt-4">
              <button
                type="button"
                onClick={() => setIsCsvModalOpen(false)}
                className="px-4 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {t('workspace.csvModalCancel')}
              </button>
              <button
                type="button"
                onClick={handleImportCsv}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-theme-orange hover:bg-theme-orange-hover text-slate-950 shadow-sm transition-colors"
              >
                {t('workspace.csvModalImport')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

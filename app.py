from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Caravanas · Justicia Social", page_icon="🚐", layout="wide")

# Quita el menú/encabezado de Streamlit y los márgenes
st.markdown(
    """
    <style>
      #MainMenu, header, footer {visibility: hidden;}
      .block-container {padding: 0 !important; max-width: 100% !important;}
    </style>
    """,
    unsafe_allow_html=True,
)

html_file = Path("caravanas-historico.html")
css_file = Path("estilos_historico.css")
js_data_file = Path("historico_data.js")
js_logic_file = Path("historico_logic.js")

if html_file.exists():
    html = html_file.read_text(encoding="utf-8")
    
    # 1. Inyectar el CSS directamente en el HTML
    if css_file.exists():
        css = css_file.read_text(encoding="utf-8")
        html = html.replace('<link rel="stylesheet" href="estilos_historico.css">', f'<style>{css}</style>')
        
    # 2. Inyectar los archivos JS directamente en el HTML
    if js_data_file.exists() and js_logic_file.exists():
        js_data = js_data_file.read_text(encoding="utf-8")
        js_logic = js_logic_file.read_text(encoding="utf-8")
        html = html.replace('<script src="historico_data.js"></script>', f'<script>{js_data}</script>')
        html = html.replace('<script src="historico_logic.js"></script>', f'<script>{js_logic}</script>')

    # 3. Mostrar el HTML ensamblado
    components.html(html, height=1600, scrolling=True)
else:
    st.error("No se encontró el archivo caravanas-historico.html.")
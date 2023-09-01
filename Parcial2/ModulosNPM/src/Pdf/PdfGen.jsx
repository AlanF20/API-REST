import { Header } from "../Header/Header";
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import Edu from '../images/Edu.jpg'
import { useState } from "react";

export function PdfGen() {
  const [text, setText] = useState('')
  const [date, setDate] = useState( new Date())

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    section: {
      padding: 10,
      display: 'flex',
      gap: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '16px'
    },
    pdf: {
      width: '50%',
      height: 700
    },
    image: {
      width: '350px',
      height: '100px'
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px'
    },
    messageCont: {
      fontSize: '16px',
      display: 'flex',
      padding: '30px 60px',
      maxWidth: '90%',
      flexWrap: 'wrap'
    }
  });
  return (
    <main className="main">
      <Header />
      <h1>Generador de PDF</h1>
      <div className="form__container">
        <form>
          <label>Ingrese texto para la constancia</label>
          <input value={text} onChange={handleChange}></input>
        </form>
        <PDFViewer style={styles.pdf}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Image style={styles.image} src={Edu} />
              </View>
              <View style={{display: 'flex', alignItems: 'flex-end', paddingRight: '10px'}}>
                <Text>{date.toLocaleDateString()}</Text>
              </View>
              <View style={styles.title}>
                <Text>Instituto Tecnologico de Nuevo Laredo</Text>
              </View>
              <View style={styles.messageCont}>
                <Text>{text}</Text>
              </View>
              <View style={{...styles.section, height:'50%', alignItems: 'flex-end'}}>
                <Text>Practica API REST 19100179.</Text>
                <Text>Alan Israel Flores Cabrera.</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </main>
  )
}
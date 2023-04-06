
import './globals.css'
import { MajorProvider } from '@/context/majorContext'
import { SubjectProvider } from '@/context/subjectContext'
import { TeacherProvider } from '@/context/teacherContext'

export const metadata = {
  title: 'Kronario',
  description: 'Kronario es una aplicación para seleccionar tu horario universitario en la universidad del norte.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-roboto bg-white'>
       <MajorProvider>
          <SubjectProvider>
            <TeacherProvider>
        { children }
            </TeacherProvider>
          </SubjectProvider>

        </MajorProvider>
      </body>
    </html>
  )
}

import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  timestamp: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  subject,
  message,
  timestamp,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#1e3a8a', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffffff', margin: 0 }}>Harsh Academy</h1>
      <p style={{ color: '#93c5fd', margin: '5px 0 0 0' }}>New Contact Form Submission</p>
    </div>

    <div style={{ backgroundColor: '#f3f4f6', padding: '30px' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '25px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#1e3a8a', marginTop: 0 }}>Contact Details</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
              <strong style={{ color: '#374151' }}>Name:</strong>
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb', color: '#1f2937' }}>
              {name}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
              <strong style={{ color: '#374151' }}>Email:</strong>
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
              <a href={`mailto:${email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                {email}
              </a>
            </td>
          </tr>
          {phone && (
            <tr>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
                <strong style={{ color: '#374151' }}>Phone:</strong>
              </td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
                <a href={`tel:${phone}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                  {phone}
                </a>
              </td>
            </tr>
          )}
          {subject && (
            <tr>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
                <strong style={{ color: '#374151' }}>Subject:</strong>
              </td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb', color: '#1f2937' }}>
                {subject}
              </td>
            </tr>
          )}
          <tr>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb' }}>
              <strong style={{ color: '#374151' }}>Received:</strong>
            </td>
            <td style={{ padding: '10px 0', borderBottom: '1px solid #e5e7eb', color: '#1f2937' }}>
              {new Date(timestamp).toLocaleString('en-IN', {
                dateStyle: 'long',
                timeStyle: 'short',
              })}
            </td>
          </tr>
        </table>

        <div style={{ marginTop: '25px' }}>
          <strong style={{ color: '#374151', display: 'block', marginBottom: '10px' }}>Message:</strong>
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '15px',
            borderRadius: '6px',
            borderLeft: '4px solid #2563eb',
            whiteSpace: 'pre-wrap',
            color: '#1f2937',
            lineHeight: '1.6'
          }}>
            {message}
          </div>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#dbeafe',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#1e40af', fontSize: '14px' }}>
            💡 Reply to this inquiry by emailing: <a href={`mailto:${email}`} style={{ color: '#1e3a8a', fontWeight: 'bold' }}>{email}</a>
          </p>
        </div>
      </div>
    </div>

    <div style={{ backgroundColor: '#1f2937', padding: '20px', textAlign: 'center' }}>
      <p style={{ color: '#9ca3af', margin: 0, fontSize: '12px' }}>
        This email was sent from the Harsh Academy contact form
      </p>
      <p style={{ color: '#9ca3af', margin: '5px 0 0 0', fontSize: '12px' }}>
        Harsh Academy - Building Bright Futures
      </p>
    </div>
  </div>
);

function hello(r) {
  r.status = 200
  r.headersOut.foo = 1234
  r.headersOut['Content-Type'] = 'text/plain; charset=utf-8'
  r.headersOut['Content-Length'] = 15
  r.sendHeader()
  r.send('nginx')
  r.send('java')
  r.send('script')

  r.finish()
}

export default { hello }

# frozen_string_literal: true

module Nodejs
  module Npm
    module_function

    BINARY = 'npm'

    def install
      run('ci')
    end

    def clean
      run('run clean')
    end

    def build
      run("run build:#{Environment.current}")
    end

    def run(args)
      Command.cmd(
        [BINARY, *args].join(' ')
      )
    end
  end
end

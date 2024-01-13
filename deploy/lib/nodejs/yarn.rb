# frozen_string_literal: true

module Nodejs
  module Yarn
    module_function

    BINARY = 'yarn'

    def install
      run('install --frozen-lockfile')
    end

    def clean
      run('clean')
    end

    def build
      run("build:#{Environment.current}")
    end

    def run(args)
      Command.cmd(
        [BINARY, *args].join(' ')
      )
    end
  end
end

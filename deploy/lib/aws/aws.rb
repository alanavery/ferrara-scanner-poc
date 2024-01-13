# frozen_string_literal: true

module Aws
  module_function

  BINARY = 'aws'

  def output(args)
    Command.output("#{BINARY} #{Config.options} --output=json #{args}").strip
  end

  def run(args, out: 'text')
    Command.cmd(
      [BINARY, Config.options, "--output=#{out}", *args].join(' ').strip
    )
  end
end
